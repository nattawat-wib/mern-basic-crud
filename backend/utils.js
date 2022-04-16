exports.error_res = (res, status_code, msg) => {
    res.status(status_code).json({
        status: "error",
        msg
    })
}

exports.success_res = (res, status_code, data) => {
    res.status(status_code).json({
        status: "success",
        length: data.length,
        data
    })
}

exports.delete_success_res = (res) => {
    res.status(200).json({
        status: "success",
        msg: "delete data is already successfully"
    })
}