import { component$, useSignal, useTask$ , useStylesScoped$} from '@builder.io/qwik';
import {routeAction$, Form, routeLoader$, server$} from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export const useJokeVoteAction = routeAction$(async () => {
    await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
            Type: "POST"
        }
    });

})

export const useDadJoke = routeLoader$(async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });
    return (await response.json()) as {
        id: string;
        status: number;
        joke: string;
    }
})

export default component$(() => {
    const isFavoriteSignal = useSignal(false);
    const dadJokeSignal = useDadJoke();
    const favoriteJokeAction = useJokeVoteAction();
    useStylesScoped$(styles);
    useTask$(({ track }) => {
        track(() => isFavoriteSignal.value);
        console.log('FAVORITE (isomorphic)', isFavoriteSignal.value);
        server$(() => {
            console.log('FAVORITE (server)', isFavoriteSignal.value);
          })();
    });
  return <section class="section bright">
    <p>{dadJokeSignal.value.joke}</p>
    <Form action={favoriteJokeAction}>
    <input type="hidden" name="jokeID" value={dadJokeSignal.value.id} />
        <button name="vote" value="up">👍</button>
        <button name="vote" value="down">👎</button>
    </Form>
    <button
        onClick$={() => (isFavoriteSignal.value = !isFavoriteSignal.value)}
      >
        {isFavoriteSignal.value ? '❤️' : '🤍'}
      </button>
  </section>;
});