# Your Movie Search

### How to Run the Project:

1. Navigate in the terminal to webapp and run:
   `npm run start`
2. Open another terminal and navigate to webservice. Then run:
   `node server.js`
3. Open !(http://localhost:5173/)[http://localhost:5173/] on your computer
4. Search away!
5. If for some reason the code won't work, try this:

- Copy the MOVIE_AUTH_CODE=[insert code here]
- Navigate to the webservices folder in the terminal
- Type 'export ' and past the copied env variable.
- You should enter a command that looks like this: `export MOVIE_AUTH_CODE=[insert code here]`
- Try the steps to run the project again

### My Original Attempt:

- I am used to Svelte, so with my lack of experience with Vue I ran out of time to get the project functional the way I wanted it to be on my first attmpt.
- I have experience with making environment variables in Svelte, but not Vue. I tried for quite a while to get the env variables working, but that took up some time and I couldn't get it working.
- I also had my two folders webapp and webservices set up for coding, but in order to deploy to vercel I had to put them in the same directory
- I didn't separate the webapp and webservices files either for the API calls to TMDB, because I wanted to get it working in the same location fist before I separated them
- I enjoyed learning more about how to use Vue vs Svlete.
- I continued with this project to complete it to make sure I understood the skills required for the project.

### Adjustments to Add:

- Deploy project to AWS
- On hover (and/or click for phones), movie posters will show the movie overview as an overlay over the movie poster, instead of below the movie poster
- Get page paginator to check if there are more pages to go forward to after a search. If there are no pages to go forward to, keep the paginator next page disabled.

## Happy movie searching!

#### - Savannah Hilton
