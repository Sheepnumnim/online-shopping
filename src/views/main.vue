<template>
    <div>
        <div>
            <!-- อันนี้คือแถบบนที่ขยับไปมาได้ -->
            <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                <!-- Text slides with image -->
                <b-carousel-slide class="size" v-for="image in images" v-bind:key="image" v-bind:img-src="image">
                </b-carousel-slide>
            </b-carousel>
        </div>

        <br>
        <br>

        <!-- อันนี้คือแถบcategoryกับพวกsearch -->
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <br>
                    <br>
                    <b-input-group size="lg" class="mb-2">
                        <b-input-group-prepend is-text>
                            <b-icon icon="search"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input type="search" v-model="search" placeholder="Search" style="font-size:15px"></b-form-input>
                    </b-input-group>
                    <br>
                    <br>
                </b-col>
            </b-row>
        </b-container>
        <!-- อันนี้คือแสดงข้อมูล -->
        <b-container class="bv-example-row">
            <div class="col-md-3" v-for="item in filteredSearch" v-bind:key="item">
                <div class="card">
                    <img :src="item.image" :alt="item.name" class="card-img-top" height="210rem">
                    <div class="card-body" style="font-size: 2rem;">
                        <h4 class="card-title" style="font-size: 2rem;">{{ item.name }}</h4>
                        <div class="card-text">{{ item.price }} : Bath</div>
                        <div class="row justify-content-end">
                            <button class="btn btn-primary" style="font-size: 2rem;" v-b-tooltip.hover title="detail"
                                @click="gotoDetails(item._id)">detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import VueSlideBar from 'vue-slide-bar'
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';
    import axios from 'axios'

    export default {
        name: 'main',
        data() {
            return {
                slide: 0,
                sliding: null,
                images: ['./img/starwar.jpg', './img/asdw.jpg', './img/img.jpg', './img/iokj.jpg', './img/summer.jpg'],
                products: [],
                search: ''
            };
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            },
            gotoDetails(productId) {
                // console.log(productId)
                this.$router.push('/detail/' + productId)
            },search(){
                console.log(this.value)
               
                console.log(this.search)


            }
        },
        created() {
            var url = 'https://flowing-vision-262803.el.r.appspot.com/products/getMany'
            axios.get(url)
                .then((response) => {
                    this.products = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })
        },
        computed: {
            filteredSearch: function() {
                return this.products.filter((product) => {
                    return product.name.match(this.search)
                })
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

    }

    .size {

        height: 500px;
        object-fit: cover;
        width: 100%;



    }
</style>