import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HighlightCard } from "../../components/HighlightCard";

import { ConsultCard, ConsultCardData } from "../../components/ConsultCard";
import {
  Container,
  HighlightCards,
  Editings,
  Title,
  ConsultsList,
  LoadContainer,
} from "./styles";
import { ActivityIndicator, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/Header";

export interface DataListProps extends ConsultCardData {
  id: string;
}

interface HighlightProps {
  lastConsults: string;
  name: string;
}
interface HighlightData {
  first: HighlightProps;
  second: HighlightProps;
  third: HighlightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );
  const theme = useTheme(); 

  function getLastConsultsDate(collection: DataListProps[]) {
    if (collection.length === 0) {
      return 0;
    }

    const lastEditings = new Date(
      Math.max.apply(
        Math,
        collection.map((editings) => new Date(editings.date).getTime())
      )
    );
    const obj = collection.find((item) => {
      if (new Date(item.date).toISOString() == lastEditings.toISOString())
        return item;
    });

    return {
      name: obj!.name || "",
      lastEditings: `${lastEditings.getDate()} de ${lastEditings.toLocaleString(
        "pt-BR",
        {
          month: "long",
        }
      )} `,
    };
  }

  async function loadTransactions() {
    const consults = [
      {
        id: "1",
        name: "Nome empresa 1",
        date: new Date().toString(),
        progress: 20,
      },
      {
        id: "2",
        name: "Nome empresa 2 ",
        date: new Date().toString(),
        progress: 50,
      },
      {
        id: "3",
        name: "Nome empresa 3",
        date: new Date().toString(),
        progress: 70,
      },
      {
        id: "4",
        name: "Nome empresa 4",
        date: new Date().toString(),
        progress: 100,
      },
    ];
    const consultsFormatted: DataListProps[] = consults.map(
      (item: DataListProps) => {
        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          date,
          progress: item.progress,
        };
      }
    );
    setData(consultsFormatted);

    //Comandos para pegar o item mais recente editado e dps retira da lista para poder procura o proximo
    const lastConsultsFirst = getLastConsultsDate(consults);
    const consultsWhitoutFirst = consults.filter(
      (item) => lastConsultsFirst && lastConsultsFirst.name !== item.name
    );
    const lastConsultsSecond = getLastConsultsDate(consultsWhitoutFirst);
    const consultsWhitoutFirstSecond = consultsWhitoutFirst.filter(
      (item) => lastConsultsSecond && lastConsultsSecond.name !== item.name
    );
    const lastConsultsThird = getLastConsultsDate(consultsWhitoutFirstSecond);

    setHighlightData({
      first: {
        name: lastConsultsFirst === 0 ? " " : lastConsultsFirst.name,
        lastConsults:
          lastConsultsFirst === 0
            ? "Não há consultorias"
            : `Última entrada dia ${lastConsultsFirst.lastEditings}`,
      },
      second: {
        name: lastConsultsSecond === 0 ? " " : lastConsultsSecond.name,
        lastConsults:
          lastConsultsSecond === 0
            ? "Não há consultorias"
            : `Última entrada dia ${lastConsultsSecond.lastEditings}`,
      },
      third: {
        name: lastConsultsThird === 0 ? " " : lastConsultsThird.name,
        lastConsults:
          lastConsultsThird === 0
            ? "Não há consultorias"
            : `Última entrada dia ${lastConsultsThird.lastEditings}`,
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color={theme.colors.main} />
        </LoadContainer>
      ) : (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Header />
          <HighlightCards>
            <HighlightCard
              title="Ultima consultoria editada"
              name={highlightData.first.name}
              lastConsults={highlightData.first.lastConsults}
            />
            <HighlightCard
              title="Saídas"
              name={highlightData.second.name}
              lastConsults={highlightData.second.lastConsults}
            />
            <HighlightCard
              title="Total"
              name={highlightData.third.name}
              lastConsults={highlightData.third.lastConsults}
            />
          </HighlightCards>

          <Editings>
            <Title>Listagem de consultorias</Title>
            <ConsultsList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ConsultCard data={item} />}
            />
          </Editings>
        </>
      )}
    </Container>
  );
}
