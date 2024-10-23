import Service from "../Services/service";


export async function CreateScreenLayout() {
    var data;
    await Service.getdata("Layout/GetAll")
        .then(res => {
            data = res.data;
        })
        .catch((err) => {
            console.error(err);
    });
    return data;
}