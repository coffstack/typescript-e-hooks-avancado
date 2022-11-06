import axios from "axios";
import { Character } from "../models/Character";
import { Episode } from "../models/Episode";
import { Page } from "../types/page";

const BASE_URL = "https://rickandmortyapi.com/api/";

async function getCharacters(page: number): Promise<Character[]> {
  const response = await axios.get<Page<Character>>(
    `${BASE_URL}character/?page=${page}`
  );

  return response.data.results;
}

async function getEpisodes(page: number): Promise<Episode[]> {
  const response = await axios.get<Page<Episode>>(
    `${BASE_URL}episode/?page=${page}`
  );

  return response.data.results;
}

export const api = {
  getCharacters,
  getEpisodes,
};
