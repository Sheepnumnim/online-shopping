<template>
    <div>
        <div>
            <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators 
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd"  >
                <!-- Text slides with image -->
                <b-carousel-slide  class="size" v-for="image in images" v-bind:key="image" v-bind:img-src="image">
                 </b-carousel-slide>
                 </b-carousel>
        </div>
    
        <b-container class="bv-example-row">
            <div class="col-md-3" v-for="item in forSale" v-bind:key="item">
                <div class="card">
                    <img :src="item.image" :alt="item.name" class="card-img-top" height="210rem">
                    <div class="card-body" style="font-size: 2rem;">
                        <h4 class="card-title" style="font-size: 2rem;">{{ item.name }}</h4>
                        <div class="card-text">{{ item.price }} : Bath</div>
                        <div class="row justify-content-end">
                            <button class="btn btn-primary" style="font-size: 2rem;" v-b-tooltip.hover
                                title="buy">buy</button>
                        </div>
                    </div>

                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';

    export default {
        name: 'main',
        data() {
            return {
                slide: 0,
                sliding: null,
                forSale: [{
                        invId: 1,
                        name: 'eiei',
                        image: 'https://www.jornadacontinental.org/wp-content/uploads/2020/01/2.jpg',
                        price: 100
                    },
                    {
                        invId: 2,
                        name: 'hat',
                        image: 'https://images-na.ssl-images-amazon.com/images/I/61KdLTqjadL._AC_UX679_.jpg',
                        price: 200
                    },
                    {
                        invId: 3,
                        name: 'shoe',
                        image: 'https://www.jordansaleuk.com/wp-content/uploads/2019/02/air-jordan-1-mid-bred-multi-color-shoes-uk-for-cheap-554724-125.jpeg',
                        price: 300
                    },
                    {
                        invId: 4,
                        name: 'shirt',
                        image: 'https://ge.lnwfile.com/agk7gg.jpg',
                        price: 299
                    },
                    {
                        invId: 4,
                        name: 'shirt',
                        image: 'https://ge.lnwfile.com/agk7gg.jpg',
                        price: 299
                    },
                ],
                images: ['./img/starwar.jpg', './img/asdw.jpg','./img/img.jpg','./img/iokj.jpg','./img/summer.jpg'
                ]

            };
        },
        methods: {

            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }

        },
        components: {
            Hooper,
            Slide,
            HooperNavigation
        }
    }
</script>
<style scoped>
    .card {
        margin-top: 5rem;

    }.size{
   
	height: 500px;
	object-fit: cover;
	width: 100%;



    }
</style>