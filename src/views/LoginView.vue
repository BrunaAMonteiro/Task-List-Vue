<script setup lang="ts">
import { NotebookPen } from 'lucide-vue-next';

</script>

<template>
    
    <div
        :class="[
            'min-h-screen flex items-center justify-center bg-white-100 dark:bg-espeon-purple-100',
            'py-12 px-4 sm:px-6 lg:px-8'
        ]"
    >
    
        <div class="max-w-md w-full space-y-8">
            <div class="text-center">
        <div class="flex justify-center items-center gap-2 mb-6">
            <NotebookPen class="w-8 h-8 text-espeon-lavanda-light-300 dark:text-espeon-lavanda-100" />
            <h1 class="text-3xl font-bold text-espeon-purple-900 dark:text-white-200 ">Lista de Tarefas</h1>
        </div>
        <h2 class="text-2xl font-bold text-espeon-purple-900 dark:text-white-200"
        >Entre na sua conta</h2>
        <p class="mt-2 text-sm text-espeon-purple-900 dark:text-white-200">
            Ou 
            <router-link 
                to="/register"
                :class="[
                    'font-medium text-espeon-purple-360 hover:text-espeon-lavanda-light-300',
                    'dark:text-white-200 dark:hover:text-espeon-lavanda-light-300 transition-colors'
                ]"
            >
                Crie uma nova conta
            </router-link>
        </p>
            </div> 

            <form class="mt-8 space-y-6">
        <div class="space-y-4">
            <div>
                <label for="email" class="sr-only">
                    Usuário
                </label>
                <div class="relative">
                    <input
                        id="user"
                        name="user"
                        type="text"
                        required
                        placeholder="Digite o nome de usuário"
                        :class="[
                            ' relative block w-full pl-10 pr-3 py-3 border border-espeon-lavanda-100',
                            'dark:border-espeon-lavanda-100 placeholder-espeon-lavanda-100 dark:placeholder-espeon-lavanda-100',
                            'text-espeon-purple-900 dark:text-white-200 rounded-lg bg-white-light-250 dark:bg-espeon-purple-360',
                            'focus:outline-none focus:ring-espeon-lavanda-light-300 focus:border-espeon-lavanda-100 transition-colors'
                        ]"  
                    />
                </div>
            </div>

            <div>
                <label for="password" class="sr-only">
                    Senha
                </label>
                <div class="relative">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Digite a sua senha"
                        :class="[
                            ' relative block w-full pl-10 pr-3 py-3 border border-espeon-lavanda-100',
                            'dark:border-espeon-lavanda-100 placeholder-espeon-lavanda-100 dark:placeholder-espeon-lavanda-100',
                            'text-espeon-purple-900 dark:text-white-200 rounded-lg bg-white-light-250 dark:bg-espeon-purple-360',
                            'focus:outline-none focus:ring-espeon-lavanda-light-300 focus:border-espeon-lavanda-100 transition-colors'
                        ]"  
                    />
                    <button
                        type="button"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <Eye 
                            class="h-5 w-5 hover:text-espeon-lavanda-light-300 dark:hover:text-espeon-lavanda-100"
                        />
                        <EyeOff 
                            class="h-5 w-5 hover:text-espeon-lavanda-light-300 dark:hover:text-espeon-lavanda-100"
                        />

                    </button>
                </div>
            </div>

        </div>
            </form>
        </div>
    </div>
</template>