const baseUrl = 'http://localhost:3030/jsonstore/grocery';

const loadAllProductsButton = document.getElementById('load-product');
const addProductButton = document.getElementById('add-product');
const updateProductButton = document.getElementById('update-product');
const tbodyElement = document.getElementById('tbody');

const productInput = document.getElementById('product');
const countInput = document.getElementById('count');
const priceInput = document.getElementById('price');

let currentProductId = null;

loadAllProductsButton.addEventListener('click', loadProducts);

addProductButton.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!validateInput()) {
        return;
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            product: productInput.value,
            count: countInput.value,
            price: priceInput.value,
        }),
    });

    clearInputData();
    await loadProducts(e);
})

updateProductButton.addEventListener('click', async (e) => {
    if (!validateInput()) {
        return;
    }

    const { product, count, price } = getInputData();

    const response = await fetch(`${baseUrl}/${currentProductId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            product,
            count,
            price,
        }),
    });
    clearInputData();
    
    updateProductButton.disabled = true;
    addProductButton.disabled = false;
    
    await loadProducts(e);
});

async function loadProducts(e) {
    if (e) {
        e.preventDefault();
    }

    const response = await fetch(baseUrl);
    const data = await response.json();

    renderProducts(data);
}

function renderProducts(products) {
    tbodyElement.innerHTML = '';
    Object.values(products).forEach(product => {
        const productTrElement = createProductTrElement(product);
        tbodyElement.appendChild(productTrElement);
    });
}

async function removeProduct(productId, productTrElement) {
    const response = await fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE'
    });
    productTrElement.remove();
}

function populateInputData(product, productTrElement) {
    currentProductId = product._id;

    productInput.value = product.product;
    countInput.value = product.count;
    priceInput.value = product.price;
    
    
    addProductButton.disabled = true;
    updateProductButton.disabled = false;
    
    productTrElement.remove();
}

function createProductTrElement(product) {
    const productTrElement = document.createElement('tr');

    productTrElement.appendChild(createTdElement('name', product.product));
    productTrElement.appendChild(createTdElement('count-product', product.count));
    productTrElement.appendChild(createTdElement('product-price', product.price));

    const tdButtonsElement = document.createElement('td');
    tdButtonsElement.classList.add('btn');

    const updateButton = document.createElement('button');
    updateButton.classList.add('update');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', (e) => populateInputData(product, productTrElement));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => removeProduct(product._id, productTrElement));

    tdButtonsElement.appendChild(updateButton);
    tdButtonsElement.appendChild(deleteButton);

    productTrElement.appendChild(tdButtonsElement);

    return productTrElement;
}

function createTdElement(className, text) {
    const tdElement = document.createElement('td');
    tdElement.classList.add(className);
    tdElement.textContent = text;

    return tdElement;
}

function getInputData() {
    const product = productInput.value;
    const count = countInput.value;
    const price = priceInput.value;

    return { product, count, price };
}

function clearInputData() {
    productInput.value = '';
    countInput.value = '';
    priceInput.value = '';
}

function validateInput() {
    if (!productInput.value || !countInput.value || !priceInput.value) {
        return false;
    }
    return true;
}

