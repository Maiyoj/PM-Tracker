class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :projectname, :description, :client_id
end
