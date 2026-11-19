import { describe, it, expect } from 'vitest';
import { phone, prepareImport, followDate, queue, validateMessage, optOut } from '@/features/prospector/rules';
import { demoData } from '@/features/prospector/demo';
describe('Regras de prospecção',()=>{
 it('normaliza celular brasileiro com 55',()=>expect(phone('(11) 99999-1234')).toEqual({value:'5511999991234'}));
 it('descarta telefone claramente fixo',()=>expect(phone('(11) 3333-1234').reason).toBe('Telefone claramente fixo'));
 it('remove duplicadas pelo telefone',()=>{const p=prepareImport([{nome:'A',telefone:'11999991234'},{title:'B',phone:'+55 11 99999-1234'}],[]);expect(p.accepted).toHaveLength(1);expect(p.rejected[0].reason).toBe('Telefone duplicado');});
 it('agenda follow-up em três dias no fuso brasileiro',()=>expect(followDate(new Date('2026-11-19T22:00:00Z'))).toBe('2026-11-22'));
 it('padrão limita a 20 primeiras mensagens',()=>{const first=demoData.leads[2];const leads=Array.from({length:25},(_,i)=>({...first,id:String(i)}));expect(queue(leads,20)).toHaveLength(20);});
 it('põe follow-ups vencidos antes da primeira abordagem',()=>expect(queue(demoData.leads,20)[0].contato.status).toBe('enviado'));
 it('nunca inclui empresa que pediu saída',()=>{const lead={...demoData.leads[2],saiu:true};expect(queue([lead],20)).toHaveLength(0);});
 it('prioriza nota alta e depois avaliações',()=>expect(queue([demoData.leads[3],demoData.leads[2]],20)[0].nome).toBe('Ótica Visão'));
 it('bloqueia primeira mensagem acima de quatro linhas',()=>expect(()=>validateMessage(`A\nB\nC\nD\n${optOut}`,'A')).toThrow());
 it('exige saída na primeira mensagem',()=>expect(()=>validateMessage('Olá, A! Quer ver uma demonstração?','A')).toThrow());
 it('não permite link na primeira mensagem',()=>expect(()=>validateMessage(`A https://site.com\n${optOut}`,'A')).toThrow());
 it('sem limite restante ainda permite follow-up vencido',()=>{const result=queue(demoData.leads,0);expect(result).toHaveLength(2);expect(result.every(l=>l.contato.status==='enviado')).toBe(true);});
});