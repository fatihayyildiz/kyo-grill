"""Kyo Grill menü görsellerini Pollinations.ai ile üret (seri, rate-limit güvenli)."""
import os
import sys
import time
import urllib.parse
import urllib.request

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "images")
STYLE = ("professional food photography, dark moody izakaya setting, warm ambient light, "
         "high detail, appetizing, restaurant menu photo, shallow depth of field")

ITEMS = [
    ("hero", "yakitori grill station at a japanese izakaya, chef grilling skewers over glowing binchotan charcoal, flames and smoke rising, dark cinematic atmosphere, wide shot"),
    ("tori", "yakitori chicken thigh skewer (tori) with tare glaze, charred caramelized edges, sesame seeds, on a black slate plate"),
    ("negima", "yakitori negima skewers, alternating chicken thigh and leek pieces, glossy tare glaze, lightly charred"),
    ("tsukune", "tsukune chicken meatball skewers with tare glaze, served with a small bowl of raw egg yolk for dipping"),
    ("buta", "buta bara pork belly yakitori skewers, crispy charred edges, sweet soy glaze, grilled over charcoal"),
    ("kawa", "crispy grilled chicken skin skewers (kawa), golden brown and charred, yakitori style"),
    ("veg", "vegetarian yakitori skewers with shiitake mushrooms, zucchini and cherry tomatoes, grilled and glazed"),
    ("ebi", "grilled jumbo prawn skewers (ebi), charred shells, lemon wedge, yakitori style"),
    ("edamame", "steamed edamame beans in a black ceramic bowl, sprinkled with sea salt, japanese izakaya side dish"),
    ("gyoza", "crispy pan-fried gyoza dumplings, golden brown bottoms, black plate, dipping sauce with chili oil, sesame seeds"),
    ("karaage", "japanese karaage fried chicken, golden crispy chunks, lemon wedge, kewpie mayo drizzle, izakaya style"),
    ("takoyaki", "takoyaki octopus balls drizzled with takoyaki sauce and mayo, dancing bonito flakes, street food style"),
    ("sashimi", "fresh sashimi platter with salmon and tuna slices, wasabi and shiso leaf, elegant presentation on ice"),
    ("nasu", "nasu dengaku, grilled eggplant halves glazed with sweet miso, sesame seeds, chopped scallions"),
    ("onigiri", "yaki onigiri grilled rice balls with soy glaze, charred edges, wrapped with nori seaweed"),
    ("sake", "two glasses of chilled japanese sake on a dark wooden izakaya counter, warm backlight"),
    ("highball", "japanese whisky highball cocktail in a tall glass with ice and lemon twist, condensation, bar counter"),
    ("beer", "glass of japanese lager beer with frothy head and condensation, izakaya counter, warm light"),
    ("matcha", "matcha latte in a ceramic cup with latte art, steam rising, dark moody background"),
    ("mochi", "matcha mochi ice cream dessert dusted with matcha powder, black ceramic plate"),
    ("tiramisu", "japanese matcha tiramisu slice on a ceramic plate, dusted with matcha powder, elegant plating"),
    ("branch1", "exterior of a small japanese yakitori restaurant in berlin at night, warm lantern glow, dark red and black facade, modern minimal design, empty street"),
    ("branch2", "exterior of a japanese izakaya restaurant in berlin in the evening, wooden facade with hanging paper lanterns, cozy street scene"),
]


def fetch_one(name: str, prompt: str, seed: int) -> bool:
    out_path = os.path.join(OUT, f"{name}.jpg")
    if os.path.exists(out_path):
        print(f"SKIP {name} (already exists)", flush=True)
        return True
    url = ("https://image.pollinations.ai/prompt/"
           + urllib.parse.quote(f"{prompt}, {STYLE}")
           + f"?width=1024&height=1024&nologo=true&seed={seed}&model=flux")
    for attempt in range(5):
        time.sleep(4)  # seri istek, rate limit'e takilmamak icin
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                         "Referer": "https://pollinations.ai/"})
            with urllib.request.urlopen(req, timeout=150) as resp:
                data = resp.read()
            if len(data) < 5000:
                raise ValueError(f"too small ({len(data)} bytes)")
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"OK  {name} ({len(data)//1024} KB, attempt {attempt+1})", flush=True)
            return True
        except Exception as e:
            print(f"ERR {name} attempt {attempt+1}: {e}", flush=True)
            time.sleep(10)
    return False


def main():
    os.makedirs(OUT, exist_ok=True)
    t0 = time.time()
    ok = 0
    for i, (name, prompt) in enumerate(ITEMS):
        if fetch_one(name, prompt, i):
            ok += 1
    print(f"DONE {ok}/{len(ITEMS)} in {time.time()-t0:.0f}s")
    return 0 if ok == len(ITEMS) else 1


if __name__ == "__main__":
    sys.exit(main())
