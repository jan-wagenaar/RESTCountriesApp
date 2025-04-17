<script>
  import Card from "../layout/card.svelte";

  let { country } = $props();
</script>

<Card
  imageUrl={country.flags.svg}
  altText={`Flag of ${country.name}`}
  href={`/${country.alpha3Code}`}
>
  <h3>{country.name}</h3>
  <p>Population: {country.population}</p>
  <p>Region: {country.region}</p>
  <p>Capital: {country.capital}</p>
</Card>
