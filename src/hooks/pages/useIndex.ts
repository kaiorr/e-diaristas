import { useState, useMemo } from "react";
import UserShortInterface from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { api } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [find, setFind] = useState(false);
  const [loading, setLoading] = useState(false);
  const [diarist, setDiarist] = useState([] as UserShortInterface[]);
  const [remainingDiarist, setRemainingDiarist] = useState(0);

  async function findDiarist(cep: string) {
    setFind(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await api.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiarist(data.diaristas);
      setRemainingDiarist(data.quantidade_diaristas);
      setFind(true);
      setLoading(false);
    } catch (error) {
      setError("CEP não encontrado");
      setLoading(false);
    }
  }

  const cepValid = useMemo(() => {
    return ValidationService.cep(cep) ? "CEP Valido" : "CEP Inváido";
  }, [cep]);

  return {
    cep,
    setCep,
    cepValid,
    findDiarist,
    error,
    diarist,
    find,
    loading,
    remainingDiarist,
  };
}
