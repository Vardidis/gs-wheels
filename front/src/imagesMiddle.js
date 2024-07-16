export const fetchImages = async () => {
    const response = await fetch('http://localhost:4300/products');
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    const images = await response.json();
    console.log(images)
    return images;
};