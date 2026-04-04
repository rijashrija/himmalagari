import urllib.request, os

base = "https://www.mayurstay.com/himmalagari/assets/images/icons/"
icons = ["trophy.png", "rating.png", "quality-service.png", "passport.png", "lowest-price.png", "thumb-up.png"]

os.makedirs("assets/images/icons", exist_ok=True)

for icon in icons:
    url = base + icon
    dest = f"assets/images/icons/{icon}"
    try:
        urllib.request.urlretrieve(url, dest)
        print(f"Downloaded: {icon}")
    except Exception as e:
        print(f"Failed {icon}: {e}")
