export class Activity {
  static search() {
    const endpoint = `https://www.boredapi.com/api/activity/`
    
    return fetch(endpoint)
    .then(data => data.json())
    .then(({ activity, type, participants}) => ({
      activity,
      type,
      participants
    }))
  }
}
