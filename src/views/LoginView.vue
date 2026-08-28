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
                <label for="user" class="sr-only">
                    Usuário
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center   pointer-events-none z-10">
                        <User class="h-5 w-5 text-espeon-lavanda-100" />
                    </div>
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
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  z-10">
                        <Lock class="h-5 w-5 text-espeon-lavanda-100" />
                    </div>
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

                    <button 
                    type="submit"
                    :class="[
                        'group relative w-full flex justify-center py-3 px-4 border',
                        'border-transparent text-sm font-medium rounded-lg text-espeon-purple-900',
                        'bg-white-light-250 hover:bg-white-light-150 focus:outline-none',
                        'focus:ring-2 focus:ring-offset-2 focus:ring-espeon-purple-900',
                        'disabled:opacity-50 disabled:cursor-not-allowed transition-colors'

                    ]"
                >
                    <LogIn class="w-5 mr-2" />
                    Entrar
                    </button>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { NotebookPen, Lock, User, LogIn, Eye ,EyeOff  } from 'lucide-vue-next';

export default {
    name: 'LoginView',
    components: {
        NotebookPen,
        Lock,
        User,
        LogIn,
        Eye,
        EyeOff
    }
}

</script>