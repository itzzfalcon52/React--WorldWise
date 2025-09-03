import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../SupabaseAuth";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("cities")
          .select("*")
          .order("created_at", { ascending: true });
        setCities(data);
        if (error) throw error;
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(async (id) => {
    try {
      setIsLoading(true);
      setIsLoading(true);
      const { data, error } = await supabase
        .from("cities")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      setCurrentCity(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []); // 👈 stable reference
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("cities")
        .insert([
          {
            cityName: newCity.cityName,
            country: newCity.country,
            emoji: newCity.emoji,
            notes: newCity.notes,
            position: newCity.position,
            visited_at: newCity.visited_at,
          },
        ])
        .select(); // return inserted row with auto-generated id
      if (error) throw error;
      setCities((cities) => [...cities, data[0]]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      const { error } = await supabase.from("cities").delete().eq("id", id);
      if (error) throw error;
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { CitiesProvider, useCities };
