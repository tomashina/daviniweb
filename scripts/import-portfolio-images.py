#!/usr/bin/env python3
"""Import the supplied Davini portfolio photography into public/portfolio.

The importer keeps the original files untouched, removes byte-identical
duplicates and creates sequential, high-quality WebP galleries for the site.
"""

from __future__ import annotations

import argparse
import hashlib
from pathlib import Path

from PIL import Image, ImageOps


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}


def image_files(folder: Path, recursive: bool = False) -> list[Path]:
    iterator = folder.rglob("*") if recursive else folder.iterdir()
    return sorted(
        path
        for path in iterator
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def named(folder: Path, *names: str) -> list[Path]:
    return [folder / name for name in names]


def prefixed(folder: Path, prefix: str) -> list[Path]:
    return sorted(
        path
        for path in image_files(folder)
        if path.name.startswith(prefix)
    )


def digest(path: Path) -> str:
    hasher = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            hasher.update(chunk)
    return hasher.hexdigest()


def build_galleries(source_root: Path) -> list[tuple[str, list[Path]]]:
    primary = source_root / "wetransfer_slike_2026-07-31_0738"
    medical = source_root / "wetransfer_specijalna-bolnica-arithera_2026-07-31_0741"
    arsano = source_root / "wetransfer_arsano-medical-group_2026-07-31_0756"
    hotel = source_root / "wetransfer_hotel-plaza-pag_2026-07-31_0747"
    apartment = source_root / "wetransfer_311661146_112814151615541_7816788887983366516_n-jpg_2026-07-31_0806"
    residence = source_root / "wetransfer_a001-png_2026-07-31_0749"
    mixed_root = source_root / "wetransfer_render-1774299345132-png_2026-07-31_0802"
    mixed = mixed_root / "projekti"

    aviva = image_files(primary / "Poliklinika Aviva")
    urocentar = image_files(medical / "Poliklinika Urocentar") + named(
        mixed,
        "9Z8A2263.jpg",
        "9Z8A2296.jpg",
        "9Z8A2394.jpg",
        "9Z8A2526.jpg",
    )
    ariderma_folder = medical / "Skin Clinic Ariderma"
    ariderma = named(
        ariderma_folder,
        "126025667_3370310563017615_5984519238856011357_n.jpg",
        "126026516_3370312589684079_376502171996887183_n.jpg",
        "126147760_3370311499684188_7742892301945037722_n.jpg",
        "Novosti-Anti-age-centar.png",
        "Novosti-Anti-age-centar-5.png",
        "125922599_3370307769684561_4334169285809482658_n-500x500.jpg",
        "125938226_3370309689684369_4351195538554321770_n-500x500.jpg",
        "125986810_3370309083017763_7120538661683777074_n-500x500.jpg",
    )

    vetti_folder = primary / "Veterinarska poliklinika Vetti"
    vetti = named(
        vetti_folder,
        "005.png",
        "006.png",
        "008.png",
        "010.png",
        "011.png",
        "014.png",
        "76665.png",
        "a016.png",
        "čekaonica za mačke 1.png",
        "hfhfhfhfh.png",
    ) + named(mixed, "Veterinarska-klinika-BUBA-4.webp")

    kostrena_folder = primary / "Vila Kostrena"
    kostrena = named(kostrena_folder, "a01.png") + [
        path for path in image_files(kostrena_folder) if path.name != "a01.png"
    ]

    lovran_folder = primary / "Vila Lovran"
    lovran = named(
        lovran_folder,
        "livingroom 1.png",
        "livingroom 5.png",
        "livingroom 6.png",
        "Master kupaona 1 kat 1.png",
        "bathroom basement 2.png",
        "bathroom guest basement 2.png",
        "bedroom basement 3.png",
        "gym 3.png",
        "vinski podrum 2.png",
    ) + named(
        mixed,
        "bathroom basement 1.png",
        "bathroom guest 1 basement .png",
        "bedroom basement 1.png",
        "bedroom master 1 floor 1.png",
        "bedroom master 2 floor 1.png",
        "bedroom small 1 floor 1.png",
        "gym 2.png",
        "vinski podrum 1.png",
        "vinski podrum 3.png",
        "vinski podrum 4.png",
    )

    mnml = sorted(path for path in image_files(mixed) if path.name.startswith("MNMLAI_"))
    pantovcak = named(arsano, "127.png") + named(mixed, "129.png", "d006.png") + mnml

    hotel_files = image_files(hotel)
    hotel_plaza = named(hotel, "render-1784805630814.png") + [
        path for path in hotel_files if path.name != "render-1784805630814.png"
    ]

    ekosen = named(
        mixed,
        "Ekosen-razstavni-prostor.jpg",
        "ekosen 2.jpg",
        "ekosen-poslovni-prostori.jpg",
        "ekosen.jpg",
    )
    sandra = named(
        mixed,
        "RC6-2697.webp",
        "RC6-2703.webp",
        "RC6-2715.webp",
        "o_37838192_1280.jpg",
        "sandra 1.jpg",
        "sandra 2.jpg",
    )
    wine_bar = named(
        mixed,
        "2d6d620e9160618da50611d13467dde2.jpg",
        "7ad5d3a5cb3f66c7f0e75617f3eac1fe.jpg",
    )

    mixed_residential = (
        image_files(apartment)
        + image_files(residence)
        + image_files(mixed_root)
        + named(mixed, "004.png", "006.png", "009.png", "011.png")
        + named(
            mixed,
            "IMG-20260516-WA0002.jpg",
            "kuh 005.png",
            "kuh 006.png",
            "livingroom 3.png",
            "livingroom 4.png",
            "spavaca master 1 (1).png",
        )
        + prefixed(mixed, "render-177909")
        + prefixed(mixed, "render-178254")
        + prefixed(mixed, "render-178255")
        + prefixed(mixed, "render-178257")
    )
    # Use a strong landscape render as the cover of the mixed gallery.
    preferred_cover = apartment / "render-1776520142167.png"
    mixed_residential = [preferred_cover] + [
        path for path in mixed_residential if path != preferred_cover
    ]

    return [
        ("urocentar", urocentar),
        ("arithera", image_files(medical / "Specijalna bolnica Arithera")),
        ("aviva", aviva),
        ("ariderma", ariderma),
        ("vetti", vetti),
        ("arsano-medical-group", image_files(arsano / "Arsano Medical Group")),
        ("boutique-san-marco", image_files(medical / "Butique San Marco")),
        ("faces-2-face", image_files(arsano / "Face2face")),
        ("vila-kostrena", kostrena),
        ("vila-pantovcak", pantovcak),
        ("stan-98-zagreb", image_files(primary / "Stan 98 Zagreb")),
        ("stan-petrova", image_files(primary / "Stan Petrova zagreb")),
        ("vila-lovran", lovran),
        ("hotel-plaza-pag", hotel_plaza),
        ("ekosen", ekosen),
        ("beauty-salon-sandra", sandra),
        ("wine-bar", wine_bar),
        ("od-svega-po-malo", mixed_residential),
    ]


def convert(source: Path, destination: Path, max_edge: int, quality: int) -> tuple[int, int]:
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        if image.mode in {"RGBA", "LA"} or (image.mode == "P" and "transparency" in image.info):
            rgba = image.convert("RGBA")
            background = Image.new("RGBA", rgba.size, (246, 241, 233, 255))
            background.alpha_composite(rgba)
            image = background.convert("RGB")
        else:
            image = image.convert("RGB")

        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS, reducing_gap=3.0)
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=quality, method=6, exact=True)
        return image.size


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--max-edge", type=int, default=2560)
    parser.add_argument("--quality", type=int, default=90)
    args = parser.parse_args()

    galleries = build_galleries(args.source)
    selected = [path for _, paths in galleries for path in paths]
    missing = [path for path in selected if not path.is_file()]
    if missing:
        raise SystemExit("Missing source files:\n" + "\n".join(map(str, missing)))

    source_files = image_files(args.source, recursive=True)
    source_hashes = {digest(path) for path in source_files}
    selected_hashes = [digest(path) for path in selected]
    if len(selected_hashes) != len(set(selected_hashes)):
        raise SystemExit("The gallery mapping contains duplicate source images")
    if set(selected_hashes) != source_hashes:
        selected_set = set(selected_hashes)
        unmapped = [path for path in source_files if digest(path) not in selected_set]
        raise SystemExit("Unmapped unique images:\n" + "\n".join(map(str, unmapped)))

    print(f"Importing {len(selected)} unique images into {len(galleries)} projects")
    for slug, sources in galleries:
        project_folder = args.destination / slug
        project_folder.mkdir(parents=True, exist_ok=True)
        for stale in project_folder.glob("*.webp"):
            stale.unlink()
        first_size = None
        for index, source in enumerate(sources, start=1):
            destination = project_folder / f"{index:02d}.webp"
            size = convert(source, destination, args.max_edge, args.quality)
            first_size = first_size or size
        print(f"{slug}: {len(sources)} images, cover {first_size[0]}x{first_size[1]}")

    site_assets = args.destination.parent / "site-assets"
    site_assets.mkdir(parents=True, exist_ok=True)
    hero_source = (
        args.source
        / "wetransfer_311661146_112814151615541_7816788887983366516_n-jpg_2026-07-31_0806"
        / "render-1776520142167.png"
    )
    contact_source = (
        args.source
        / "wetransfer_render-1774299345132-png_2026-07-31_0802"
        / "projekti"
        / "MNMLAI_INTERIORAI_00001_ (8).png"
    )
    for edge in (640, 1280, 1920):
        convert(hero_source, site_assets / f"hero-{edge}.webp", edge, 88)
    convert(contact_source, site_assets / "contact-1280.webp", 1280, 78)
    print("site-assets: responsive hero and contact background")


if __name__ == "__main__":
    main()
