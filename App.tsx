import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Telas
import Home from "./src/pages/home";
import BuscaRede from "./src/pages/buscaRede";
import Game from "./src/pages/game";
import Agendamento from "./src/pages/agendamento";
import AgendamentoBusca from "./src/pages/agendamentoBusca";
import AgendamentoConsulta from "./src/pages/agendamentoConsulta";
import AgendamentoResultado from "./src/pages/agendamentoResultado";
import Cobertura from "./src/pages/cobertura";
import FaleConosco from "./src/pages/faleConosco";
import DadosPessoais from "./src/pages/dadosPessoais";
import BuscarLocalidade from "./src/pages/pesquisaLocalidade";
import SelecionarCidade from "./src/pages/selecioneCidade";
import SelecionarEstado from "./src/pages/selecioneEstado";
import TarefasDiarias from "./src/pages/tarefas";
import PontuacaoConsulta from "./src/pages/pontosConsulta";
import ChecklistDiario from "./src/pages/checklistDiario";
import ChecklistSemanal from "./src/pages/checklistSemanal";
import Login from "./src/pages/login";
import Cadastro from "./src/pages/cadastro";
import Premios from "./src/pages/premios";
import Quiz from "./src/pages/quiz";
import SelecionarBairro from './src/pages/selecioneBairro';
import Consulta from './src/pages/consulta';

import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0066FF" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BuscaRede" component={BuscaRede} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="AgendamentoBusca" component={AgendamentoBusca} />
        <Stack.Screen name="AgendamentoConsulta" component={AgendamentoConsulta} />
        <Stack.Screen name="AgendamentoResultado" component={AgendamentoResultado} />
        <Stack.Screen name="Cobertura" component={Cobertura} />
        <Stack.Screen name="FaleConosco" component={FaleConosco} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
        <Stack.Screen name="BuscarLocalidade" component={BuscarLocalidade} />
        <Stack.Screen name="SelecionarEstado" component={SelecionarEstado} />
        <Stack.Screen name="SelecionarCidade" component={SelecionarCidade} />
        <Stack.Screen name="TarefasDiarias" component={TarefasDiarias} />
        <Stack.Screen name="PontuacaoConsulta" component={PontuacaoConsulta} />
        <Stack.Screen name="ChecklistDiario" component={ChecklistDiario} />
        <Stack.Screen name="ChecklistSemanal" component={ChecklistSemanal} />
        <Stack.Screen name="Premios" component={Premios} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="SelecionarBairro" component={SelecionarBairro} />
        <Stack.Screen name="Consulta" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
