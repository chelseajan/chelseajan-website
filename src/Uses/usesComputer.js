import React from 'react';

const usesComputer = (props) => {

    const uses = {

        equipment: [
            {
                model: "Macbook Pro",
                brand: "Apple",
                specs: "I have the 13-inch with the 2.3 GHz Intel Core i5 (2017) processor, and 16GB Memory. It occassionally experiences the spinning wheel of death when I forget that I have over 50 Chrome tabs of Stack Overflow tabs open, while trying to edit images from my full frame camera on Adobe PS. Oops.",
                href: "https://www.apple.com/macbook-pro-13/"
            },
            {
                model: "Magic Mouse 2",
                brand: "Apple",
                specs: "I have Mission Control (to see all open windows) configured to the 2-finger tap on my Magic Mouse.",
                href: "https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver"
            },
            {
                model: "Magic Keyboard",
                brand: "Apple",
                specs: "I opted for the one without the numpad because the shorter keyboard helps me maintain an ergonomic desk position.",
                href: "https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english"
            },
            {
                model: "Laptop Stand",
                brand: "mStand",
                specs: "Comes in all sorts of colors, but mine is Space Gray",
                href: "https://amzn.com/B074DTL449"
            },
            {
                model: "WH-1000MX3 Noise Canceling Headphones ",
                brand: "Sony",
                specs: "I tend to get distracted  easily by side conversations, so these  headphones have saved me from losing my sanity in open workplace environments that workplaces have inveitable adopted.",
                href: "https://www.sony.com/electronics/headband-headphones/wh-1000xm3"
            },
        ],
        tools: [
            { 
                tool: "Pourover Coffee Kit",
                description: "Strongly against instant or decaf coffee. Admittingly a little obnoxious about pourover.",
                href: "https://www.chemexcoffeemaker.com/"
            },
            {
                tool: "Stack Overflow",
                description: "There's a very rare chance that no one else in the dev community has seen and worked around the problem you're encountering.",
                href: "https://stackoverflow.com/"
            },
            {
                tool: "Github",
                description: "Industry standard for code change control and an essential tool in the workflow.",
                href: "https://github.com/"
            },
            {
                tool: "Visual Studio Code",
                description: "Visual Studio Code was my first IDE I used when I  started typing my first lines of code. Able to handle terminal (bash/powershell, cmd). My favorite and most used extensions include Live Server, Path Intellisense,  Debugger for Chrome, and Color Picker. ",
                href: "https://code.visualstudio.com/"
            },
            {
                tool: "Jira",
                description: "An essential tool as a Product Manager for backlog management. My favorite feature to use is the 'Version Report', which provides a visualization of when to expect the completion date of a particular release, based on the remaining, estimated, and completed number of story points.",
                href: "https://www.atlassian.com/software/jira"
            },
            {
                tool: "Adobe XD",
                description: "Great for prototyping and high fidelity mock-ups.  Reliable integration with the rest of the Creative Cloud suite.",
                href: "https://www.adobe.com/products/xd.html"
            }
        ]  
    };
 return (
    <div className="uses-computer">
        <h4>Desk Setup</h4>
        {
            uses.equipment.map(obj => {
                return (
                    <div className="uses-item">
                        <strong><a href={obj.href}>{obj.model} by {obj.brand}</a></strong>
                        <p>{obj.specs}</p>
                    </div>
                )
            })
        }
        <h4>Development Tools</h4>
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

export default usesComputer
