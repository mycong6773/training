
fetchData = () => {
    // var apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const apiUrl = "https://60f993997ae59c0017165e38.mockapi.io/testApi/Test";
    axios.get(apiUrl)
        .then(res => {
            console.log(res);
            if (res.statusText === "OK") {
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
                           }
        })
}
fetchData();

removeItem = (removeId) => {
    const apiUrl = "https://60f993997ae59c0017165e38.mockapi.io/testApi/Test";
    // var apiUrl = "https://jsonplaceholder.typicode.com/posts";
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
                    console.log(res);
                })
                .then(() => {
                    const removeItem = document.querySelector('.row-' + removeId);
                    removeItem.remove()
                })

        }
    })
}
var postInfor = {};
var id = null;
getPostInfor = () => {
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
    const getPostInforUrl = apiUrl + "/" + id;
    axios.get(getPostInforUrl)
        .then(res => {
            console.log(res)
            if (res.statusText === "OK") {
                postInfor = res.data;
                document.querySelector('[name="title"]').value = postInfor.title
                document.querySelector('[name="body"]').value = postInfor.body
            }

        })
}
addPost=(el)=>{
    const apiUrl = "https://60f993997ae59c0017165e38.mockapi.io/testApi/Test";
    const title = document.querySelector('[name="title"]').value;
    const body = document.querySelector('[name="body"]').value;
    const requestObj = {
        title:title,
        body:body
    }
    axios.post(apiUrl, requestObj)
        .then(data => {
            console.log(data);
            if(data.statusText === "Created"){
              window.location.href='index.html'
            }
        })
    return false;
}

editPost = () => {
    const title = document.querySelector('[name="title"]').value;
    const body = document.querySelector('[name="body"]').value;
    postInfor.title = title;
    postInfor.body = body;
    const UpdateUrlPost = apiUrl + '/' + id;
    axios.put(UpdateUrlPost, postInfor)
        .then(data => {
            console.log(data);
            if (data.statusText === "OK") {
                window.location.href = 'index.html'
            }
        })
    return false;
}
