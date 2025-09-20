import { BASE_URL } from '@/lib/utils/constants';
import { CustomError } from '@/lib/errors/error';

export async function fetchConfig(type: string) {
  try {
    const configRes = await fetch(`${BASE_URL}/config/?type=${type}`);
    const config = await configRes.json();
    return config;
  } catch (err) {
    throw new CustomError(
      `${
        err
          ? `${err}. Failed to fetch config`
          : 'Failed fetching configurations'
      }`,
      500
    );
  }
}

export async function fetchBasicData(entity: string) {
  try {
    const dataRes = await fetch(`${BASE_URL}/${entity}`);
    const data = await dataRes.json();
    return data;
  } catch (err) {
    throw new CustomError(
      `${
        err
          ? `${err}. Failed to fetch basic data`
          : 'Failed fetching basic data'
      }`,
      500
    );
  }
}
