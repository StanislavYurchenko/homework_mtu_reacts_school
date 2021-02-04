import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './Movies';

import * as Api from '../../services/themoviedbApi';

// DECORATOR
const decorator = Story => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Story />
      </Route>
    </BrowserRouter>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Movies',
  component: Movies,
  decorators: [decorator],
};

export const Main = (args, { loaded: { movies } }) => (
  <Movies {...args} movies={movies} />
);

Main.loaders = [
  async () => ({
    movies: await Api.popularFetch(1).then(res => res.results),
  }),
];

Main.parameters = {
  controls: { hideNoControlsWarning: true },
};

const Template = args => <Movies {...args} />;

export const Manual = Template.bind({});
Manual.args = {
  movies: [
    {
      adult: false,
      backdrop_path: '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
      genre_ids: [53, 80],
      id: 602269,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'The Little Things',
      overview:
        'Deputy Sheriff Joe "Deke" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who\'s terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke\'s past, uncovering disturbing secrets that could threaten more than his case.',
      popularity: 628.561,
      poster_path: '/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
      release_date: '2021-01-27',
      title: 'The Little Things',
      video: false,
      vote_average: 6.4,
      vote_count: 148,
    },
  ],
};
