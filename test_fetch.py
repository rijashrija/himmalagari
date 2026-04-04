import re, urllib.request
try:
    html = urllib.request.urlopen("https://www.mayurstay.com/himmalagari/home.html").read().decode("utf-8")
    idx = html.find("Explore Locally")
    section = html[idx:idx+3000]
    matches = re.findall(r'<img[^>]+src=[\"\'](.*?)[\"\']', section)
    with open("results.txt", "w") as f:
        for i, m in enumerate(matches):
            f.write(f"Match {i}: {m}\n")
    print("Done")
except Exception as e:
    print("Error:", e)
