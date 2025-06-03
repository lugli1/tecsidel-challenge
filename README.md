# CHALLENGE FIAP – TECSIDEL
## Sistema de monitoria dos pórticos free flow
### • Login
![image](https://github.com/user-attachments/assets/580e058a-a5f6-4cb1-ab4c-278f6a9f72c1)

<p align="center">
  <img src="https://github.com/user-attachments/assets/87c90ab3-c545-4e55-9bdb-6935f3a4cb0f" width="400"/>
  <img src="https://github.com/user-attachments/assets/110c84e4-70ac-4b1a-b484-e2832e4fafdd" width="400"/>
</p>

O usuário é criado pela empresa e entregado à concessionária que estará encarregada de monitorar o funcionamento dos equipamentos.

### • Tela Inicial
![image](https://github.com/user-attachments/assets/de376e9d-3b76-4efc-bd95-0d51b29dcfb5)
#### Consulta
Segundo alguns filtros o usuário pode consultar os últimos registros de determinado tipo de dado:<br>
![image](https://github.com/user-attachments/assets/2c35ee74-3e85-4323-9140-3970b851b345)
![image](https://github.com/user-attachments/assets/9ec0675b-d612-4594-b44a-af2eb63f29ce)
![image](https://github.com/user-attachments/assets/d0f6c757-488a-4494-b207-74cef4de0611)
![image](https://github.com/user-attachments/assets/76a699e1-847b-4588-8fdd-f142ee0c6537)
A ideia é disponibilizar um download de um arquivo csv dos registros. Outros filtros como: período, tipo do veículo, tamanho, rodas suspensas, cobrado por tag ou por placa, etc, também podem ser interessantes para a análise de dados.<br>
#### Pórticos – Free Flow
Os pórticos ligados ao usuário (rodovia) estão disponíveis para serem acessados aqui. O ícone à esquerda indica o status de todos os equipamentos do pórtico. Se não houver problema em nenhum, o ícone fica verde.
<table>
  <tr>
    <td valign="top">
      <img src="https://github.com/user-attachments/assets/33cc1f5f-03b5-41fa-9814-e6cda6de6869" width="600"/>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/8c6eceeb-3bb8-4d69-ad14-8363da4bf9c8" width="300"/>
    </td>
  </tr>
</table>


### • Tela Pórtico
![image](https://github.com/user-attachments/assets/b6420246-d3fc-4a22-92ea-f0422493d4f0)
#### Acompanhamento
Aqui vemos algumas visões sobre o sistema, como o tráfego de veículos por minuto, as últimas cobranças, receita gerada no pórtico e incidentes.<br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/6e6db95e-c2ae-44a5-8c0b-6a8f2c292194" width="200" style="vertical-align: top; margin-right: 10px;"/>
  <img src="https://github.com/user-attachments/assets/c713afcd-1c8b-484f-9323-a13b82ab268e" width="180" style="vertical-align: top; margin-right: 10px;"/>
  <img src="https://github.com/user-attachments/assets/47cdd39b-6ee2-47e3-89f4-a9147015938e" width="150" style="vertical-align: top; margin-right: 10px;"/>
  <img src="https://github.com/user-attachments/assets/1cec51f1-1c70-4a2e-a2fb-735f2e916a8a" width="180" style="vertical-align: top;"/>
</p>

Tráfego seria a quantidade de veículos captados no último minuto. Últimas cobranças seria uma tela onde há uma lista com as últimas cobranças que atualiza a cada registro. Receita vem dos pagamentos confirmados.
Incidentes seria todos os problemas, ou seja, o registro do momento que algum equipamento parou de funcionar, uma cobrança que não pode ser efetuada(seja por a placa não ser captada, ou por que a placa não condiz com as características do veículo).<br>
![image](https://github.com/user-attachments/assets/00a848c6-a6c5-423c-a37b-574f9e70109b)
![image](https://github.com/user-attachments/assets/b56b3bd7-09d6-4500-ba49-9214727961d3)
#### Faixas
![image](https://github.com/user-attachments/assets/458ce418-dba1-4e0c-8bec-7d602951cc94)<br>
Para cada faixa de rolamento, há duas câmeras, antena e sensores. Aqui é onde as imagens das câmeras aparecem. Usualmente os pórticos free flow são feitos nos dois sentidos da pista, então são muitas câmeras para se monitorar.
#### Status
![image](https://github.com/user-attachments/assets/9c4e5035-8b16-4700-b69c-410f15377cd7)<br>
O ícone vermelho com a câmera indica que o status de ao menos um equipamento está com problema. Ao clicar nele podemos ver o status de cada equipamento da faixa.

## Insights
Alguns dos insights que o sistema proporciona ao negócio são:
- Quantidade de veículos pesados: para estudo de manutenção da rodovia (nessa quantidade, a manutenção precisa ser feita de tanto em tanto tempo).
- Análise de métricas: a média de veículos em determinados períodos, para preparar os agentes de trânsito e o policiamento.
- Identificação de infratores: o sistema pode notificar a policia rodoviária sobre veículos infratores, seja veículos com documentação irregular, ou veículos com a placa coberta ou alterada. Enviando uma foto e características do veículo na notificação ao próximo posto da policia rodoviária após o pórtico.

O Free Flow é muito atrativo ao público, que terá menos chance de se encontrar congestionado no trânsito, e consequentemente às rodovias que poderá receber mais clientes. No entanto, o sistema de monitoria é de suma importância para que a concessionária mantenha tudo em ordem e não tenha prejuízo. Por isso ele precisa ser bem desenvolvido permitindo à monitoria identificar falhas o quanto antes.

## MRE
![image](https://github.com/user-attachments/assets/cb227e90-fe06-409c-853a-2274641ebad8)

## UML
![image](https://github.com/user-attachments/assets/5725d432-0f0c-4ae1-a883-7e33a188f1ae)

















