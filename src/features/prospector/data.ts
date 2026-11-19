import { supabase } from '@/integrations/supabase/client';
import type { Lead } from './rules';
export const workspaceOptions = {queryKey:['workspace'],queryFn:async()=>{
 const [companies,contacts,offers,settings,logs]=await Promise.all([supabase.from('empresas').select('*').order('created_at',{ascending:false}).limit(1000),supabase.from('contatos').select('*').limit(1000),supabase.from('ofertas').select('*'),supabase.from('configuracoes').select('*'),supabase.from('logs').select('*').order('created_at',{ascending:false}).limit(1000)]);
 for(const result of [companies,contacts,offers,settings,logs])if(result.error)throw new Error(result.error.message);
 const leads:Lead[]=(companies.data??[]).flatMap(e=>{const contato=contacts.data?.find(c=>c.empresa_id===e.id);return contato?[{...e,contato}]:[]});
 return {leads,offers:offers.data??[],settings:Object.fromEntries((settings.data??[]).map(s=>[s.chave,s.valor])),logs:logs.data??[]};
}};
export type WorkspaceData=Awaited<ReturnType<typeof workspaceOptions.queryFn>>;
