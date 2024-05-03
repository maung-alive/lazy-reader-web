import requests

def fetch_images(keyword):
    url = f"https://pixabay.com/api?key=43695808-10e225965e425ceb6a2938f14&q={keyword}&image_type=photo&pretty=true"
    response = requests.get(url)
    if response.status_code == 200:
        images = response.json()
        if images["totalHits"] > 0:
            return {
                'keyword': keyword,
                'image': images["hits"][0]["webformatURL"]
            }

    return {
        'keyword': keyword,
        'image': None
    }

print(fetch_images("GOD"))