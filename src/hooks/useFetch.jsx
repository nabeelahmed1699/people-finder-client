import useAsync from './useAsync';

const DEFAULT_OPTIONS = {
	headers: { 'Content-Type': 'application/json' },
};

export default function useFetch(url, options = {}, dependencies = []) {
	return useAsync(() => {
		return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
			// if (res.ok) return res.json()
			if (res.ok) {
				return res.json().then((data) => {
					// Add another field to the data object
					const people = data.people.map((person) => {
						return {
							...person,
							queryAbleString: getAllValues(person),
						};
					});
					return people;
				});
			}
			return res.json().then((json) => Promise.reject(json));
		});
	}, dependencies);
}

function getAllValues(obj) {
  let values = "";
  for (let prop in obj) {
    if (prop !== "photo") {
      if (typeof obj[prop] === "object") {
        values += getAllValues(obj[prop]).toLowerCase();
      } else {
        values += obj[prop].toString().toLowerCase() + " ";
      }
    }
  }
  return values.trim();
}

