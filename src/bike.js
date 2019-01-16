export class Bike {
    getBikeInfo(location,miles) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${miles}&stolenness=all`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    
}