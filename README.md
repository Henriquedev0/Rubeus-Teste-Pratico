# 🧪 Relatório de Testes e Bugs

Projeto focado em **testes manuais e automatizados** em dois sites diferentes, com objetivo de identificar falhas de interface, usabilidade e funcionamento.

## 📌 Objetivo
Realizar testes para encontrar bugs e validar funcionalidades básicas dos sistemas.

## 🌐 Sites Testados
- [Site Certificacao](https://qualidade.apprbs.com.br/certificacao)
- [Site Site](https://qualidade.apprbs.com.br/site)

## 🐞 Bugs Encontrados
Foram identificados diversos problemas, classificados por severidade.


| Severidade | Quantidade |
|-------------|-------------|
| 🔴 Crítica (Alta) | 12 |
| 🟡 Moderada (Média) | 5 |
| 🟢 Baixa | 6 |
| **Total** | **23** |


Os detalhes completos estão documentados em um **relatório de bugs**.

## 🤖 Testes Automatizados
Foram implementados **2 testes automatizados utilizando Cypress** para validar funcionalidades específicas do sistema.

### Ferramentas

- Cypress


### Testes Criados
1. Teste de envio de formulário
2. Teste de validação de resposta/retorno do sistema

## 📸 Evidências

As evidências dos problemas encontrados, descrições detalhadas dos bugs, passos para reprodução e classificação de severidade estão documentadas no arquivo:

`BUG_REPORT.md`


## ▶️ Como Executar os Testes

### Instalar dependências
```bash
npm install
npx cypress open
npx cypress run


