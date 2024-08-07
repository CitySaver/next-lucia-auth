'use server'

export async function fetchBrands() {
    // const response = await fetch(`https://city-saver.com/api/brands`, {
    // method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Bearer Token': '1|NQ3mh1aBsYWU6z3pkmFMWyE58e0oEEBkIUdXOalHe25d449f' // 👈 New Code
    // },
    // });
    // const result = await response.json();
    // return result;
    const response = await fetch(`https://city-saver.com/api/brands/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 1|NQ3mh1aBsYWU6z3pkmFMWyE58e0oEEBkIUdXOalHe25d449f`, // 👈 New Code
    },
    });
    const brands = await response.json();
    
    return JSON.stringify(brands);
}