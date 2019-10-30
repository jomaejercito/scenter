class CommentSerializer < ActiveModel::Serializer
  attributes :id, :remark, :commenter, :perfume_id
  belongs_to :perfume
end
