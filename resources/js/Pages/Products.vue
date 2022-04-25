<template>
    <Layout>
        <div class="flex justify-between">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Product List
                    </h2>
<button @click="openModal()"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                       +
                    </button>
        </div>
<div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
      <div class="group relative" v-for="product in products.data" :key="product.id">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://picsum.photos/200" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{product.title}}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{product.description.substr(0,10)}}...</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${{product.price}}</p>
        </div>
      </div>

      <!-- More products... -->
    </div>
  </div>
</div>
<div class="mt-6">
    Pages : 
    <Component :is="link.url?'Link':'span'" v-for="link in products.links"    :href="link.url" :key="link.label" v-html="link.label" class="px-1"  />
</div>
                    <div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
                        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                            <div class="fixed inset-0 transition-opacity">
                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                             <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
                            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                 role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <form>
                                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div class="">
                                            <div class="mb-4">
                                                <label for="exampleFormControlInput1"
                                                       class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                                                <input type="text"
                                                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                       id="exampleFormControlInput1" placeholder="Title"
                                                       v-model="form.title">
                                                <div v-if="$page.props.errors.title" class="text-red-500">{{
                                                    $page.props.errors.title }}
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label for="exampleFormControlInput2"
                                                       class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                                <textarea
                                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="exampleFormControlInput2" placeholder="Description" style="height: 100px;"
                                                        v-model="form.description"></textarea>
                                                <div v-if="$page.props.errors.description" class="text-red-500">{{$page.props.errors.description }}
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <label for="exampleFormControlInput1"
                                                       class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                                                <input type="text"
                                                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                       id="exampleFormControlInput1" placeholder="Price"
                                                       v-model="form.price">
                                                <div v-if="$page.props.errors.price" class="text-red-500">
                                                    {{ $page.props.errors.price }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <button wire:click.prevent="store()" type="button"
                                      class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                      v-show="!editMode" @click="save(form)">
                                Save
                              </button>
                            </span>
                                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <button wire:click.prevent="store()" type="button"
                                      class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                      v-show="editMode" @click="update(form)">
                                Update
                              </button>
                            </span>
                                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">

                              <button @click="closeModal()" type="button"
                                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                              </button>
                            </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    </Layout>
</template>
<script>
import Layout from '../shared/Layout';
export default {
    data(){
        return{
            isOpen:false,
            editMode:false,
            form: {
                title: null,
                description: null,
                price:0
            }
            
        }
    },
    components:{Layout},
    props:{
        products:Object
    },methods: {
        openModal() {
            this.isOpen = true;
        },
        closeModal() {
                this.isOpen = false;
                this.reset();
                this.editMode = false;
        },save(products) {
                this.$inertia.post('/product', products, {
                    preserveScroll: true,
                    onSuccess: page => {

                        if (Object.keys(page.props.errors).length === 0) {
                            this.reset();
                            this.closeModal();
                            // Toast.fire({
                            //     icon: 'success',
                            //     title: 'Successfully created.'
                            // });
                        }
                    },
                })
                this.editMode = false;
            },reset() {
                this.form = {
                    title: null,
                    description: null,
                }
            },
    },
    setup() {
        
    },
}
</script>