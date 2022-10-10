class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :projectname
  has_many :tickets
end
