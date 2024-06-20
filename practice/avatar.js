let selectedImage = null;

function selectImage(imgElement) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }
    selectedImage = imgElement;
    selectedImage.classList.add('selected');
}

function confirmSelection() {
    if (selectedImage) {
        window.location.href = 'rules.html'; 
    } else { 
        alert('No image selected.');
    }
}


console.log("Harshini");
console.log("Tanoo");

