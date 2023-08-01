import { Inter } from "next/font/google";

import { usePokemon_V2_VersionnameQuery } from "@/gql/poke/exam.graphql";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, loading } = usePokemon_V2_VersionnameQuery({
    variables: { pokemonV2LocationnameByPkId: 1 },
  });

  if (loading) return <div>loading...</div>;
  return <div>{data?.pokemon_v2_locationname_by_pk?.name}</div>;
}
