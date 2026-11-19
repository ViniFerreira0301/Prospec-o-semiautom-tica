import {createFileRoute} from '@tanstack/react-router';
import {workspaceOptions} from '@/features/prospector/data';
import {WorkspacePage} from '@/features/prospector/ui';
export const Route=createFileRoute('/_authenticated/ofertas')({head:()=>({meta:[{title:'Minhas ofertas | Prospector de I.A'},{name:'description',content:'Minhas ofertas da sua prospecção responsável.'},{property:'og:title',content:'Minhas ofertas | Prospector de I.A'},{property:'og:description',content:'Organize conversas e oportunidades com empresas locais.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),loader:({context})=>context.queryClient.ensureQueryData(workspaceOptions),component:()=> <WorkspacePage view="ofertas"/>});
