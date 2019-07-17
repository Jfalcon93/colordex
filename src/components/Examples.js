import React, { Compoment } from 'react'

const Examples = ({color}) => {
    
    return (
        <div className='examples'>
           <div className='headings'>
                <h1>I am a heading</h1>
                <h2>I am a heading</h2>
                <h3>I am a heading</h3>
                <h4>I am a heading</h4>
                <h5>I am a heading</h5>
                <h6>I am a heading</h6>
           </div>
           <div className='paragraph'>
               <p>
                   Paragraph stuff paragraph stuff dolor sit amet, consectetur adipisicing elit. Excepturi dolorum perferendis qui amet natus iusto eaque explicabo ea possimus, mollitia dolores ex dolorem saepe atque fugiat dolore sequi ad reprehenderit ullam molestias asperiores tenetur. Blanditiis quod tempora ipsa minus modi necessitatibus doloremque quas voluptatibus facilis natus, nam est animi repellat.
               </p>
           </div>
           <div className='list-examples'>
               <ul className='list'>
                   <li>list item</li>
                   <li>list item</li>
                   <li>list item</li>
               </ul>
               <ol className='list'>
                   <li>ordered list item</li>
                   <li>ordered list item</li>
                   <li>ordered list item</li>
               </ol>
           </div>
        </div>
    )
    
}

export default Examples