import React from 'react';

const usesPhotography = (props) => {

    const uses = {

        equipment: [
            {
                model: "Fujifilm  X-H1 Mirrorless Digital Camera",
                specs: "A powerhouse of a APS-C camera that includes in-body stabilization (IBIS), 24MP, compatibility with all X-mount lenses, fantastic Fujifilm color science, and Eterna film simulation.",
                href: "https://fujifilm-x.com/global/products/cameras/x-h1/"
            },
            {
                model: "Fujifilm XF 35mm f/1.4",
                specs: "If I could have one lense from Fujifilm, this would be it. If you can get over the slightly slower focusing speeds, this wide aperture lens produces magic.",
                href: "https://www.bhphotovideo.com/c/product/839139-REG/Fujifilm_16240755_35mm_f_1_4_XF_R.html"
            },
            {
                model: "Fujifilm XF 23mm f/1.4",
                specs: "The most sharp/fast prime lens from Fujifilm that provides a 35mm full-frame equivalent (most similar to the field of view that humans experience). ",
                href: "https://www.bhphotovideo.com/c/product/1003764-REG/fujifilm_16405575_xf_23mm_f_1_4_r.html"
            },
            
            {
                model: "Pextax 35mm SLR",
                specs: "",
                href: ""
            }
        ],
        tools: [
            {
                tool: "Adobe Lightroom",
                description: "Pretty much all you need to edit initial changes to exposure, color HSL, alignment, and cropping. I use specifically Lightroom CC for the 20GB of Cloud Storage.",
                href: "https://www.adobe.com/products/photoshop-lightroom"
            },
            {
                tool: "Adobe Photoshop",
                description: "A long-standing photo-editing software that is almost as old as I am. Fantastic for retouching, adding crazy digital effects, and comes in both desktop and CC versions of applications.",
                href: "https://www.adobe.com/products/photoshop.html"
            }
        ]  
    };
 return (
    <div className="uses-computer">
        <h3>Photography Gear</h3>
        {
            uses.equipment.map(obj => {
                return (
                    <div className="uses-item">
                        <strong><a href={obj.href}>{obj.model}</a></strong>
                        <p>{obj.specs}</p>
                    </div>
                )
            })
        }
        <h3>Photography Tools</h3>
        {
            uses.tools.map(obj => {
            return (
                <div className="uses-item">
                    <strong><a href={obj.href}>{obj.tool}</a></strong>
                    <p>{obj.description}</p>
                </div>
            )
            })
        }
    </div>
   )
}   

export default usesPhotography
