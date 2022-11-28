import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import img1 from './images/a.jpg'
import img2 from './images/b.jpg'
import img5 from './images/c.jpg'
import img4 from './images/d.jpg'
import img6 from './images/e.jpg'
import img7 from './images/f.jpg'
import img3 from './images/g.jpg'

import {Row, Col, Container}  from 'react-bootstrap';
function Component3() {
    return (
        <div>
        <Container>
        <Row className='my-5'>
        <Col sm={6}>
        <h1 class="font-boldest mt-5">Summer Styles <br/>are Finally Here</h1>
        <p class="text-left w-auto "> This year, our new summer collection will Shelter you from the horse elements of a word that doesn't care if you live or die.</p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md mt-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3  text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
              Shop Collection
                  </a>
                </div>
                </div>
        </Col>
        <Col>
        <Box sx={{ width: 400, height: 450}}>
      <ImageList variant="woven" cols={3} gap={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Col>
    
    </Row>
    </Container>
    </div>
    );
}

export default Component3;
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
  //   title: 'Laptop',
  //   author: 'Ben Kolde',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  //   title: 'Doors',
  //   author: 'Philipp Berndt',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
  //   title: 'Coffee',
  //   author: 'Jen P.',
  // },
];
        {/* <Col>

    <div class="columns-3 gap-4 space-x-4 space-y-3">
    <Col className='mt-4'>
    <img class=" rounded  border dw-full aspect-square ..." src={img1} />
    <img class="rounded  border w-full aspect-square ..." src={img3} />
    </Col>
    <Col class="space-y-1">
    <img class=" rounded  border w-full aspect-square ..." src={img2} />
    <img class="rounded  border w-full aspect-square ..." src={img4} />
    <img class="rounded border w-full aspect-square ..." src={img5} />
    </Col>
    <Col id='thirdCol'>
    <img class="rounded  border w-full aspect-square ..." src={img6} />
    <img class="rounded  border w-full aspect-square ..." src={img7} />
    </Col>
    </div>
    </Col> */}
   