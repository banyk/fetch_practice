document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        fetch('./cars.json')
            .then(response => {
                if (response.status >= 400) {
                    output.innerHTML = 'Произошла ошибка';
                    throw new Error('Ошибка');
                } else {
                    return response.json();
                }
            }).then(data => {
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const {
                            brand,
                            model,
                            price
                        } = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
                    }
                });
            });
    });
});