import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DemoPage } from '@/features/prospector/ui';
export const Route=createFileRoute('/')({head:()=>({meta:[{title:'Hoje | Prospector de I.A'},{name:'description',content:'Sua fila de prospecção responsável para empresas locais.'},{property:'og:title',content:'Hoje | Prospector de I.A'},{property:'og:description',content:'Conversas personalizadas, revisão humana e acompanhamento.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Index});
function Index(){const navigate=useNavigate();useEffect(()=>{let live=true;supabase.auth.getUser().then(({data})=>{if(live&&data.user)navigate({to:'/hoje'});});return()=>{live=false;};},[navigate]);return <DemoPage/>;}
