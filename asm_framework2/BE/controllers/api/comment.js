const Comment = require("../../models/comment");

exports.list = async (req, res, next) => {
    var result = await Comment.fetchAll();
    res.status(200).json({
        data: result,
    });
};

exports.fetchId = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Comment.check(id);
        if (result.length > 0) {
            res.status(200).json({
                data: result,
            });
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        console.error('Error fetching comment:', error);
        res.status(500).json({ message: 'Failed to fetch comment', error: error.message });
    }
};

exports.create = async (req, res, next) => {
    try {
        const data = {
            content: req.body.content,
            status: 1,
        };

        const result = await Comment.create(data);
        if (result) {
            res.status(200).json({ data: result });
        } else {
            res.status(500).json({ message: "Failed to create comment" });
        }
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Failed to create comment", error: error.message });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;

        // Kiểm tra xem comment có tồn tại không
        const checkDelete = await Comment.check(id);
        if (checkDelete.length === 0) {
            return res
                .status(404)
                .json({ message: "Comment not found", data: false });
        }

        // Xóa comment
        const result = await Comment.delete(id);
        if (result.affectedRows > 0) {
            res
                .status(200)
                .json({ message: "Comment deleted successfully", data: true });
        } else {
            res
                .status(400)
                .json({ message: "Failed to delete comment", data: false });
        }
    } catch (error) {
        console.error("Error deleting comment:", error);
        res
            .status(500)
            .json({ message: "Failed to delete comment", error: error.message });
    }
};