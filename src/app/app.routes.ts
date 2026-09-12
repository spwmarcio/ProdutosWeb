import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { CadastrarProdutos } from './components/pages/cadastrar-produtos/cadastrar-produtos';
import { ConsultarProdutos } from './components/pages/consultar-produtos/consultar-produtos';

export const routes: Routes = [

    {
        path: 'dashboard', // rota para o dashboard
        component: Dashboard // componente a ser renderizado quando a rota for acessada
    },
    {
        path: 'cadastrar-produtos', // rota para cadastrar produto
        component: CadastrarProdutos // componente a ser renderizado quando a rota for acessada
    },
    {
        path: 'consultar-produtos', // rota para consultar produtos
        component: ConsultarProdutos // componente a ser renderizado quando a rota for acessada
    },
    {
        path: '', pathMatch: 'full', //rota padrão do projeto
        redirectTo: '/dashboard', // redireciona para o dashboard        
    }

];
