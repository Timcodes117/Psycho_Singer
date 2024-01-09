

export class downloads {
    getDownloads() {
    if (typeof window !== 'undefined') {
        if ("downloadsF" in localStorage) {
            var list: any = localStorage.getItem("downloadsF");
            list = JSON.parse(list)

            return list
        }
    }

    }

    delete(list: any, id: any) {
    if (typeof window !== 'undefined') {
        var list: any = localStorage.getItem("downloadsF");
        list = JSON.parse(list)

        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list.splice(i, 1);
            }
        }

        let newList = JSON.stringify(list)
        localStorage.setItem("downloadsF", newList)
        this.getDownloads()
    }
    }

    saveToDownloads(object: any) {
    if (typeof window !== 'undefined') {
        if ("downloadsF" in localStorage) {
            var list: any = localStorage.getItem("downloadsF");
            list = JSON.parse(list)

            list.push(object)

            list = JSON.stringify(list)
            localStorage.setItem("downloadsF", list)


        } else {
            localStorage.setItem("downloadsF", '[]')
            var list: any = localStorage.getItem("downloadsF");
            list = JSON.parse(list)

            list.push(object)

            list = JSON.stringify(list)
            localStorage.setItem("downloadsF", list)

        }
    }
    }
}