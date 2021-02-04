import { ajax } from '@lion/ajax';

export const getPosts = () => ajax.get('https://jsonplaceholder.typicode.com/posts');

export const getCrash = () => ajax.get('https://crash.endpoint.com/');
