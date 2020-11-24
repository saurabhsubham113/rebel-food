import React from 'react'
import Card from './Card'

export default function BrandLayout({ loading, brands }) {

    if (loading) return <h2>Loading ...</h2>


    return (

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,18rem)', justifyContent: 'center' }} >

            {brands.map((brand, image, i) => (
                <Card key={brand.id} name={brand.name} ibu={brand.ibu}
                    style1={brand.style} abv={brand.abv} ounces={brand.ounces}

                    image='https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png'
                />
            ))
            }
        </div>

    )
}
