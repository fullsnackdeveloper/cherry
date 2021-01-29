import Block from "./Block";
import Image from '../Image/Image';
import React from "react";

const image = {
    src: 'https://images.unsplash.com/photo-1474128670149-7082a8d370ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'chute',
    source: {
        author: {
            name: 'Paterson Mongumry',
            link: 'https://someone.com',
        },
        site: {
            name: 'Unsplash',
            link: 'https://unsplash.com',
        }
    }
}

export default {
    title: "Block",
    component: Block
};

export const Paragraph = () => <Block html="<p>This is some paragraph text</p>" />;
export const Heading2 = () => <Block html="<h2>2.</h2><h2>This is some heading text</h2>" />;
export const Heading3 = () => <Block html="<h3>This is some heading 3 text</h3>" />;
export const ImageBlock = () => <Block>
    <Image image={image}>
        <img src={image.src} alt={image.alt} />
    </Image>
</Block>;

export const MultipleBlocks = () => <div>
    <Block html="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur dolorum maiores obcaecati molestiae eius voluptas aspernatur alias impedit blanditiis, recusandae temporibus modi autem, itaque porro? Facilis quis voluptates dignissimos.</p>" />
    <Block html="<p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. </i>Explicabo consequatur dolorum maiores obcaecati molestiae eius voluptas aspernatur alias impedit blanditiis, recusandae temporibus modi autem, itaque porro? Facilis quis voluptates dignissimos.</p>" />
    <Block html="<h2>This is some heading text</h2>" />
    <Block html="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur dolorum maiores obcaecati molestiae eius voluptas aspernatur alias impedit blanditiis, recusandae temporibus modi autem, itaque porro? Facilis quis voluptates dignissimos.</p>" />
    <Block html="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur dolorum maiores obcaecati molestiae eius voluptas aspernatur alias impedit blanditiis, recusandae temporibus modi autem, itaque porro? Facilis quis voluptates dignissimos.</p>" />
    <Block html="<h3>This is some heading 3 text</h3>" />
    <Block html={`<p>"It may be best to consider a Halloween-themed cloth mask," says <a href="https://www.verywellfit.com/vanessa-nzeh-md-5075547">Dr. Vanessa Nzeh</a>, an internal medicine specialist in Houston and a Verywell Review Board member.</p>`} />
</div>
