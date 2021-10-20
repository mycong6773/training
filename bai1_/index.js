const apiUrl = "https://60f993997ae59c0017165e38.mockapi.io/testApi/Test";
const fetchData = () => {
    axios.get(apiUrl)
        .then(res => {
            const html = res.data
                .map(items => {
                    return `<tr class="row-${items.id}">
                                    <td class="text-center">${items.id}</td>
                                    <td>${items.title}</td>
                                    <td>${items.body}</td>
                                    <td class="text-center">
                                    <a href="editPost.html?id=${items.id}" class="btn btn-success">Sửa</a>
                                    <button class="btn btn-danger btn-delete" onclick="removeItem(${items.id})">Xóa</button>
                                    </td>
                                </tr>`}).join("");
            document.querySelector('.content-table').insertAdjacentHTML("afterbegin", html)

        })
        .catch(err => {
            console.log(err);
        })

}
fetchData();

const removeItem = (removeId) => {
    console.log(removeId)
    Swal.fire({
        title: 'Chac chan xoa?',
        text: "Sau khi xoaa k lay dc du lieu",
        icon: 'danger',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Dong y',
        cancelButtonText: 'khong dong y'
    }).then((result) => {
        if (result.value) {
            const deleteUrl = apiUrl + "/" + removeId;
            axios.delete(deleteUrl)
                .then(res => {
                })
                .then(() => {
                    const removeItem = document.querySelector('.row-' + removeId);
                    removeItem.remove()
                })
                .catch(err => {
                    console.log(err);
                })

        }
    })
}
let postInfor = {};
let id = null;
const getInfor = document.querySelector('#getPostInfor')
getInfor.onload = getPostInfor = (e) => {
    e.preventDefaut;
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
    const getPostInforUrl = apiUrl + "/" + id;
    axios.get(getPostInforUrl)
        .then(res => {
            console.log(res);
            postInfor = res.data;
            document.querySelector('[name="title"]').value = postInfor.title
            document.querySelector('[name="body"]').value = postInfor.body
        })
        .catch(err => {
            console.log(err);
        })
}
const formEdit = document.querySelector('#form-edit')
formEdit.onclick = editPost = (e) => {
    e.preventDefaut;
    const title = document.querySelector('[name="title"]').value;
    const body = document.querySelector('[name="body"]').value;
    postInfor.title = title;
    postInfor.body = body;
    const updateUrl = apiUrl + '/' + id;
    console.log(updateUrl);
    axios.put(updateUrl, postInfor)
        .then(data => {
            window.location.href = 'index.html'
        })
        .catch(err => {
            console.log(err);
        })
    return false;
}


const formAdd = document.querySelector('#form-add')
formAdd.onclick = addPost = (e, el) => {
    e.preventDefaut;
    const title = document.querySelector('[name="title"]').value;
    const body = document.querySelector('[name="body"]').value;
    const requestObj = {
        title: title,
        body: body
    }
    axios.post(apiUrl, requestObj)
        .then(data => {
            window.location.href = 'index.html'
        })
        .catch(err => {
            console.log(err);
        })
    return true;
}
