json.array!(@environments) do |environment|
  json.extract! environment, :id, :name, :description, :color, :url
  json.url environment_url(environment, format: :json)
end
